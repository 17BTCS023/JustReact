import { useState } from "react";

export default function CommentsForm() {
    let [formData, setFormData] = useState({
        username : "",
        remarks: "",
        rating: 5
    });

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return {
                ...currData,
                [event.target.name] : event.target.value,
            }
        });
    };

    let handleSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
        setFormData({
            username : "",
            remarks: "",
            rating: 5
        });
    };

    return (
        <div>
            <h4>Give a comment!</h4>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" placeholder="username" id="username" name="username" value={formData.username} onChange={handleInputChange} />
                <br /><br /><br />
                <label htmlFor="remarks">Comments</label>
                <textarea name="remarks" id="remarks" cols="30" rows="10" value={formData.remarks} onChange={handleInputChange} ></textarea>
                <br /><br /><br />
                <label htmlFor="rating">Rating</label>
                <input type="number" placeholder="rating" name="rating" id="rating" min={1} max={5} value={formData.rating} onChange={handleInputChange} />
                <br /><br /><br />
                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
}