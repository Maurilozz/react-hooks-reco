# Bienvenido a hooks reco

Hooks reco es una recopilación de los hooks mas útiles que podras usar en diferentes proyectos

# Archivos

index.js

## Funciones

A continuación veras la funciones que contiene este paquete

| Nombre               | Código       | Parametros                |
| -------------------- | ------------ | ------------------------- |
| Formulario de estado | `useForm()`  | formulario objeto inicial |
| Consulta fetch       | `useFetch()` | url                       |

## Uso

**_useForm_**
useForm requiere un parámetro inicial con el valor de un objeto con los nombres de los formularios ejemplo: ` useForm( {formname:""} )`

Este hook devolverá 2 estados.,
**formState**: Será el estado del formulario.
**handleForm**: Sera el controlador.

ejemplo: `const {formState, handleForm} = useForm( {formname:""} )`

Ejemplo de uso:

```jsx
function app() {
  const { formState, handleForm } = useForm({ formname: "" });
  const { formname } = formState;

  return (
    <form>
      <div>
        <label>Name Input</label>
        <input
          type="text"
          name="formname"
          value={formname}
          onChange={handleForm}
        />
      </div>
    </form>
  );
}
```

**_useFetch_**
useFetch requiere como parámetro la url a la que traera el resultado como un JSON
ejemplo: useFetch("https://api.com/apiKey")

Este hook devolverá 3 estados.,
**data**: Será el estado con el array de información obtenido .
**isLoading**: Sera un booleano (true/false) cambiara de estado cuando el estado de data contenga un valor
**hasError**: Sera un valor de tipo string que informara del error al consultar la api.

Ejemplo de uso:

```jsx
function app() {
  const { data, isLoading, hasError } = useFetch(
    "https://breakingbadapi.com/api/quotes/1"
  );

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <p>
          {" "}
          {quote} <span> {author} </span>{" "}
        </p>
      )}
    </>
  );
}
```
