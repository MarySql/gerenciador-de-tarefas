import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();

// Aqui defino o tipo da tarefa
type Task = {
  id: number; //id gerado e incrementado automaticamente.
  title: string; // titulo como string.
  description?: string; // descrição opcional.
  createdAt: number; // data como timestamp.
};

// Armazenamento em memória
let tasks: Task[] = [];
let taskId = 1;

// Rotas do CRUD
export const taskRouter = t.router({

  // Endpoint para retornar a lista de tarefas.
  listarTarefas: t.procedure.query(() => tasks),


});