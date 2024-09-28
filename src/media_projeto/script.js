let photos = [
    { url: "https://www.homeowner.com/wp-content/uploads/2024/09/Golden-Retriever-10-1.jpg", tag: "Goldinho", data: "2023-09-15" },
    { url: "https://th.bing.com/th/id/OIP.wTrhTlKlCKVFQ2IiJ1-U5gHaGd?rs=1&pid=ImgDetMain", tag: "Akita", data: "2023-09-10" },
    { url: "https://th.bing.com/th/id/OIP.kn-w5eaAnX5A1TVyMb14LQHaGE?rs=1&pid=ImgDetMain", tag: "Husky", data: "2023-09-08" },
    { url: "https://th.bing.com/th/id/R.00376dfa5265c6eb68dd03a42f9c614c?rik=n5Hq6U3VbKfa%2fA&pid=ImgRaw&r=0&sres=1&sresct=1", tag: "Samoieda", data: "2023-09-05" }
];

let filteredPhotos = photos;
let sortByTag = false; // Controla a ordenação por tag ou data

window.onload = updateList;

function registrar() {
    const urlInput = document.getElementById("photo-input");
    const tagInput = document.getElementById("tag-input");
    const dataInput = document.getElementById("data-input");

    const url = urlInput.value;
    const tag = tagInput.value;
    const data = dataInput.value;

    urlInput.value = "";
    tagInput.value = "";
    dataInput.value = "";

    photos.push({ url, tag, data });
    updateList();
}

function updateList() {
  let list = document.getElementById("list");
  list.innerHTML = "";

  if (sortByTag) {
      filteredPhotos.sort((a, b) => a.tag.localeCompare(b.tag));
  } else {
      filteredPhotos.sort((a, b) => new Date(b.data) - new Date(a.data)); // Data mais recente primeiro
  }

  for (let i = 0; i < filteredPhotos.length; i++) {
      let html = `
          <section class="card">
            <img src="${filteredPhotos[i].url}" alt="${filteredPhotos[i].tag}" />
            <p class="tag">Tag: ${filteredPhotos[i].tag}</p>
            <div class="data-container">
              <p class="data">Data: ${filteredPhotos[i].data}</p>
            </div>
          </section>`;
      list.innerHTML += html;
  }
}


function toggleSortOrder() {
    sortByTag = !sortByTag;
    updateList();
}
