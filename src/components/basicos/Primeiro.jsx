export default function Primeiro() {
    const msg = "Seja bem vindo(a)!!";

    return (
        // É comum quanfo se tem múltiplos elementos envolve-los em um par de parênteses
        <div>
            <h2>Primeiro Componente</h2>
            <p>{msg}</p>
        </div>
    );
}
