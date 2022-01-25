import Link from 'next/link'


const Header = () => {
    return (
        <div className="font-bold text-lg text-gray-200	 font-mono flex items-center bg-indigo-800	 justify-around p-7">
            <div >Flags</div>

            <div>
                <Link href="/">
                    <a className="px-2 hover:underline">Home</a>
                </Link>

                <Link href="/sobre">
                    <a className="px-2 hover:underline">Sobre</a>
                </Link>

                <Link href="/contato">
                    <a className="px-2 hover:underline">Contato</a>
                </Link>

            </div>

        </div>
    )
}

export default Header