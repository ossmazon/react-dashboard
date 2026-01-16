import "./AddUserDrawer.css"
import { useState } from "react"
import { createUserRequest } from "../../../store/users/user.slice"
import { useDispatch } from "react-redux"

export default function AddUserDrawer({
    isOpen,
    onClose,
}) {
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    })

    const fields = [
        { label: "Name", name: "name", type: "text" },
        { label: "Email", name: "email", type: "email" },
        { label: "Phone", name: "phone", type: "text" }
    ]

    const handleSubmit = (e) => {

        e.preventDefault()

        dispatch(createUserRequest(formData))

        onClose()

        console.log("submited new user", e, formData)

        setFormData({
            name: "",
            email: "",
            phone: ""
        })
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
                                <h2> Add user</h2>
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
                                    <button className="submit-btn">Create User</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}