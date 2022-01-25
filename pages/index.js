
const Home = ({data}) => {
    return (
        <div className="bg-gray-200">
            <ul className="p-2">
                {data.map(country => (
                    <li className="flex items-center justify-around p-2 m-1 text-center border-solid border-2 border-sky-500 w-96">
                        <h3 className="text-lg p-2 font-mono font-bold">{country.name}</h3>
                        <img className="border-solid border-2 border-sky-500 rounded-full w-12 h-12 p-2" src={country.flag}/>
                        <p className="p-2 font-medium text-lg">{country.population}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

Home.getInitialProps = async ()=>{
    const response = await fetch("https://restcountries.com/v3.1/all")
    const data = await response.json()

    const countries = data.map(country => {
        const { translations, population, flags } = country
        const number = new Intl.NumberFormat('pt-BR').format(population)
        return {
            name: translations.por.common,
            population: number,
            flag: flags.svg
        }
    }).sort((a,b)=>{
        return a.name.localeCompare(b.name)
    })

    return {data: countries}
}

export default Home