export const AdminScript = () => {
  const adminTableSearch = () => {
    let input = document.getElementById("adminSearch");
    let filter = input.value.toUpperCase();
    let table = document.getElementById("adminTable1");
    let tr = table.getElementsByClassName("tr");

    for (let i = 0; i < tr.length; i++) {
      let td = tr[i].getElementsByClassName("td")[0];
      if (td) {
        let txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  };
  adminTableSearch();
};
