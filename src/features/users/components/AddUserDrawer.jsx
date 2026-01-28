import "./AddUserDrawer.css"
import { useEffect, useState } from "react"
import { createUserRequest, updateUserRequest } from "../../../store/users/user.slice"
import { useDispatch } from "react-redux"

export default function AddUserDrawer({
    isOpen,
    onClose,
    userToEdit,
}) {
    const dispatch = useDispatch()

    const initialFormData = {
        name: "",
        email: "",
        phone: ""
    }

    const [formData, setFormData] = useState(initialFormData)

    const fields = [
        { label: "Name", name: "name", type: "text" },
        { label: "Email", name: "email", type: "email" },
        { label: "Phone", name: "phone", type: "text" }
    ]

    useEffect(() => {
        if (userToEdit) {
            setFormData(userToEdit)
        } else {
            setFormData(initialFormData)
        }
    }, [userToEdit])

    const isEditting = Boolean(userToEdit)

    const handleSubmit = (e) => {

        e.preventDefault()

        if (isEditting) {
            dispatch(updateUserRequest(formData))
        } else {
            dispatch(createUserRequest(formData))
        }

        onClose()

        if (!isEditting) {
            setFormData({
                name: "",
                email: "",
                phone: ""
            })
        }
    }

    return (
        <>
            {isOpen && (
                <>
                    <div className="add-user-overlay">
                        <div className={`add-user-drawer ${isOpen ? "open" : ""}`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="drawer-header">
                                <h2> {isEditting ? "Edit User" : "Add New User"}</h2>
                                <button className="drawer-close-btn"
                                    onClick={onClose}
                                >X</button>
                            </div>
                            <div className="drawer-body">
                                <form onSubmit={handleSubmit}>
                                    {
                                        fields.map(field => (
                                            <div className="form-group"
                                                key={field.name}
                                            >
                                                <label>{field.label}</label>
                                                <input
                                                    type={field.type}
                                                    name={field.name}
                                                    value={formData[field.name]}
                                                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                                                />
                                            </div>
                                        ))
                                    }
                                    <button className="submit-btn">{isEditting ? "Update User" : "Create User"}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}