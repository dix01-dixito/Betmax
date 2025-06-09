let saldo = 430;

function recargarSaldo() {
  const input = document.getElementById('montoRecarga');
  const monto = parseFloat(input.value);

  if (!isNaN(monto) && monto > 0) {
    saldo += monto;
    actualizarSaldoUI();
    input.value = '';

    // ✅ Cierra correctamente el modal usando Bootstrap 5
    const modalElement = document.getElementById('recargaModal');
    const modal = bootstrap.Modal.getInstance(modalElement) 
              || new bootstrap.Modal(modalElement); // fallback por si aún no está instanciado
    modal.hide(); 
  } else {
    alert("Por favor ingresa un monto válido.");
  }
}

function actualizarSaldoUI() {
  const saldoTexto = document.querySelector('.pay-btn .btn-text');
  if (saldoTexto) {
    saldoTexto.innerHTML = `<span class="badge bg-danger">Dix</span> $ ${saldo}`;
  }
}
