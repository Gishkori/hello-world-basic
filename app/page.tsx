const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};


function MyButton() {
    return (
        <button>I'm a button</button>
    );
}

function AboutPage() {
    return (
        <div>
        <h1>About</h1>
        <p>Hello there.<br />How do you do?</p>
        </div>
    );
}


export default function Page() {
    return (
        <div>
            <h1>Welcome to my App</h1>
            <MyButton />
            <AboutPage />
            <h4>{user.name}</h4>
            <img
            className="avatar"
            src={user.imageUrl}
            alt={'Photo of ' + user.name}
            style={{
                width: user.imageSize,
                height: user.imageSize,
            }}
            />
        </div>
    );
}
