import { useState } from "react";
import { useParams } from "react-router-dom";

const userData = [];

export default function UserForm() {
    const item = useState(userData);

    let { id } = useParams();

    return (
        <div className="p-6">
            detalhes do usuario {id}das dasdas d
        </div>
    );
}
