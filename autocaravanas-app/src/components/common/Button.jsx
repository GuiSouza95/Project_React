export default function Button({ children, onClick, type = "button" }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className="bg-lime-800 text-white px-5 py-2 rounded-lg hover:bg-lime-900"
        >
            {children}
        </button>
    );
}