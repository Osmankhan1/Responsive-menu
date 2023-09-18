

const Link = ({route}) => {
    return (
        <div >
            <li className="mr-10 p-2 m-5 rounded-lg font-bold text-white text-center hover:bg-red-800 hover:text-white"><a href={`route.path`}>{route.name}</a></li>
        </div>
    );
};

export default Link;