const WHATSAPP_NUMBER = "19296429620";

const bookingForm = document.querySelector("#bookingForm");
const formNote = document.querySelector("#formNote");

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js").catch(() => {});
  });
}

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(bookingForm);
  const message = [
    "Hola Luciano Wash, quiero cotizar un servicio de limpieza.",
    `Nombre: ${data.get("name")}`,
    `Necesidad: ${data.get("item")}`,
    `Servicio: ${data.get("service")}`,
    `Fecha deseada: ${data.get("date")}`,
    `Ubicacion: ${data.get("location") || "Por confirmar"}`,
  ].join("\n");

  formNote.textContent = "Mensaje listo. Abriendo WhatsApp...";
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});
