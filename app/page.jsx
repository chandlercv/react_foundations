import LikeButton from "./like-button";

function Header({ title }) {  // Destructuring props
    console.log(title); // { title: 'React' }
    return <h1>{title ? title : 'Default Title'}</h1>;
}

export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Marie Curie'];

    return (
        <div>
            <Header title="Develop. Preview. Ship." />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <LikeButton />
        </div>
    );
}