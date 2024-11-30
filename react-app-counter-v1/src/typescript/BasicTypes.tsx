
export default function BasicTypes() {
    const name: string = 'Wilians Basantes'
    const age: number = 28
    const isActive: boolean = false
    const people = ['Ana','Pedro','Miguel'];
    return (
    <>
       <h3>Basic Types</h3>
        {name} - {age} - {isActive ? 'Activate' : 'No Activo'} - {people.join(', ')}
    </>

  )
}
