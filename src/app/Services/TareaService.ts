import { Injectable } from '@angular/core';
import { Tarea } from '../Interfaces/tarea';    

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  tareas: Tarea[] = [];
  idActual = 1;

  obtenerTareas(): Tarea[] {
    return this.tareas;
  }

  agregarTarea(titulo: string, descripcion: string) {
    this.tareas.push({ id: this.idActual++, titulo, descripcion, estado: 'pendiente' });
  }

  cambiarEstado(id: number) {
    const tarea = this.tareas.find(t => t.id === id);
    if (tarea) {
      tarea.estado = tarea.estado === 'pendiente' ? 'completada' : 'pendiente';
    }
  }

  eliminarTarea(id: number) {
    this.tareas = this.tareas.filter(t => t.id !== id);
  }
}
