interface Persona {
    age?:number,
    firstName: string,
    lastName:string,
    address: {
        country:string,
        houseNo:number
    }
}
export default function ObjectLiterals() {
    const persona: Persona ={
        age:28,
        firstName: 'Wilians',
        lastName: 'Basantes',
        address: {
            country: 'Ecuador',
            houseNo:6
        }
    }
    return (
    <>
    <h3>Objects</h3>
    {JSON.stringify(persona,null,2)}
    </>
  )
}
