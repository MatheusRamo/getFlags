export default async (res, req) => {
    const response = await fetch("https://restcountries.com/v3.1/all")
    const data = await response.json()

    const countries = data.map(country => {
        const { name, population, flags } = country
        return {
            name: name.common,
            population: population,
            flag: flags.svg
        }
    })

    res.end(countries)
}