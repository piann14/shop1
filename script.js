// Array untuk menyimpan item yang dipilih
let orderItems = [];

// Fungsi untuk menambah item ke pesanan dan memilih produk
function selectItem(name, price, image, element) {
    // Jika item sudah dipilih, hapus pilihan
    if (element.classList.contains('selected')) {
        element.classList.remove('selected');
        orderItems = orderItems.filter(item => item.name !== name);
    } else {
        // Jika item belum dipilih, tandai sebagai dipilih
        element.classList.add('selected');
        orderItems.push({ name, price, image });
    }

    // Memperbarui ringkasan pesanan
    updateOrderSummary();
}

// Fungsi untuk memperbarui ringkasan pesanan
function updateOrderSummary() {
    const orderList = document.getElementById("orderList");
    const totalPriceElement = document.getElementById("totalPrice");

    let totalPrice = 0;

    // Menghapus item yang ada sebelumnya
    orderList.innerHTML = '';

    // Menambah item yang dipilih ke dalam daftar
    orderItems.forEach(item => {
        const listItem = document.createElement("div");
        listItem.classList.add("item");
        listItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div>
                <span class="item-name">${item.name}</span>
                <span class="item-price">Rp ${item.price.toLocaleString()}</span>
            </div>
        `;
        orderList.appendChild(listItem);

        // Menambahkan harga item ke total
        totalPrice += item.price;
    });

    // Menampilkan total harga
    totalPriceElement.innerText = `Rp ${totalPrice.toLocaleString()}`;
}

// Fungsi untuk mengonfirmasi pesanan
function confirmOrder() {
    if (orderItems.length > 0) {
        alert("Pesanan Anda telah dikonfirmasi!");
    } else {
        alert("Silakan pilih barang terlebih dahulu!");
    }
}
