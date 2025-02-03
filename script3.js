document.addEventListener('DOMContentLoaded', () => {
    const calendarDaysContainer = document.querySelector('.calendar-days');
    const hoursContainer = document.getElementById('hours-container');
  
    const daysInMonth = 28; // Días del mes
    const firstDayOffset = 1; // Días en blanco antes del inicio (lunes = 0)
  
    // Obtener el día actual
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth() + 1;
    const currentYear = today.getFullYear();
  
    // Días de la semana (encabezados)
    const dayHeaders = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
    dayHeaders.forEach(day => {
      const header = document.createElement("span");
      header.classList.add("day-header");
      header.textContent = day;
      calendarDaysContainer.appendChild(header);
    });
  
    // Simular el estado de los días (libre, algunas reservas, completo)
    const getDayStatus = () => {
      return Math.random() > 0.8 ? "full" : Math.random() > 0.5 ? "partial" : "free";
    };
  
    // Generar días en blanco antes del primer día del mes
    for (let i = 0; i < firstDayOffset; i++) {
      const blankDay = document.createElement("span");
      blankDay.classList.add("day", "blank");
      calendarDaysContainer.appendChild(blankDay);
    }
  
    // Generar los días del mes
    for (let day = 1; day <= daysInMonth; day++) {
      const dayElement = document.createElement("span");
      dayElement.classList.add("day");
      dayElement.textContent = day;
  
      // Asignar estado del día
      const dayStatus = getDayStatus();
      if (dayStatus === "full") {
        dayElement.classList.add("full");
      } else if (dayStatus === "partial") {
        dayElement.classList.add("partial");
      }
  
      // Resaltar el día actual
      if (day === currentDay && currentMonth === 2 && currentYear === 2025) {
        dayElement.classList.add("today");
      }
  
      // Evento al hacer clic en un día
      dayElement.addEventListener("click", () => {
        const hours = Array.from({ length: 13 }, (_, i) => ({
          time: `${8 + i}:00h`,
          status: Math.random() > 0.7 ? "reserved" : "available",
        }));
  
        // Limpiar el contenedor de horas
        hoursContainer.innerHTML = '';
  
        // Agregar título
        const dayTitle = document.createElement("h4");
        dayTitle.textContent = `Horas para el día ${day}`;
        hoursContainer.appendChild(dayTitle);
  
        // Crear la grilla de horas
        const hourGrid = document.createElement("div");
        hourGrid.classList.add("hour-grid");
  
        hours.forEach(hour => {
          const hourBox = document.createElement("div");
          hourBox.classList.add("hour-box", hour.status);
          hourBox.textContent = hour.time;
          hourGrid.appendChild(hourBox);
        });
  
        hoursContainer.appendChild(hourGrid);
      });
  
      calendarDaysContainer.appendChild(dayElement);
    }
  });
  
  
  