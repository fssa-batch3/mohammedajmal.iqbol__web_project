window.addEventListener("DOMContentLoaded", (event) => {
  // Simple-DataTables from github
  // https://github.com/fiduswriter/Simple-DataTables/wiki

  const datatablesSimple = document.getElementById("datatablesSimple");
  if (datatablesSimple) {
    const simpleTable = new simpleDatatables.DataTable(datatablesSimple);
    return simpleTable;
  }
  
});
