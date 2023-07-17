export default function Container({children}) {
    return (
        <div className="w-full px-10 mx-auto sm:w-[85%] sm:px-0 md:w-[90%] lg:w-[78%] xl:w-[70%] xl:max-w-screen-lg">
            {children}
        </div>
    )
}
