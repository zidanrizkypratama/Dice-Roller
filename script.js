// Program Pengacak Dadu

function acakDadu(){

    const nomordadu = document.getElementById("nomordadu").value;
    const hasildadu = document.getElementById("hasil");
    const gambardadu = document.getElementById("gambardadu");
    const values = [];
    const images = [];

    for(let i = 0; i < nomordadu; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="gambardadu/${value}.png">`);
    }
    hasildadu.textContent = `Dadu : ${values.join(`, `)}`;
    gambardadu.innerHTML = images.join(``);
}