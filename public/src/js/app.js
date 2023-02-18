const container = document.querySelector('.container');
const food = [
    { name: 'Kentang Mustofa', price: 5000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbTEi1w-P_Kx2moMeiCIzQN-JOMj1yer8OkA&usqp=CAU' },
    { name: 'Orek Tempe', price: 3000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbTEi1w-P_Kx2moMeiCIzQN-JOMj1yer8OkA&usqp=CAU' },
    { name: 'Telur Balado', price: 6000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbTEi1w-P_Kx2moMeiCIzQN-JOMj1yer8OkA&usqp=CAU' },
    { name: 'Sayur Sop', price: 4000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbTEi1w-P_Kx2moMeiCIzQN-JOMj1yer8OkA&usqp=CAU' },
    { name: 'Ayam Goreng', price: 9000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbTEi1w-P_Kx2moMeiCIzQN-JOMj1yer8OkA&usqp=CAU' },
    { name: 'Es Teh Manis', price: 4000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbTEi1w-P_Kx2moMeiCIzQN-JOMj1yer8OkA&usqp=CAU' },
    { name: 'Jengkol', price: 3000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbTEi1w-P_Kx2moMeiCIzQN-JOMj1yer8OkA&usqp=CAU' },
    { name: 'Bakwan', price: 1500, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbTEi1w-P_Kx2moMeiCIzQN-JOMj1yer8OkA&usqp=CAU' },
    { name: 'Kopi', price: 3500, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbTEi1w-P_Kx2moMeiCIzQN-JOMj1yer8OkA&usqp=CAU' },
    { name: 'Es Jeruk', price: 5000, Image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbTEi1w-P_Kx2moMeiCIzQN-JOMj1yer8OkA&usqp=CAU` },
]

const renderFood = () => {
    let html = '';
    food.forEach(({ name, price, image }) => (
        html += `
            <div class="p-2">
                <div class="card">
                    <img src="${image}" alt="${name}" />
                    <div class="card-body">
                        <h5 class="card-title text-center">${name}</h5>
                        <p class="card-text text-center">Rp. ${price}</p>
                        <div class="text-center mx-auto">
                            <a href="#" class="btn btn-primary">Pesan Sekarang</a>
                        </div>
                    </div>
                </div>
            </div>
        `)
    )
    container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', renderFood);
