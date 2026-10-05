import { db } from './db';
export async function audit(input:{schoolId?:string|null,userId?:string|null,action:string,entity:string,entityId?:string|null,metadata?:unknown}) { if(!input.schoolId) return; await db.auditLog.create({data:{schoolId:input.schoolId,userId:input.userId||null,action:input.action,entity:input.entity,entityId:input.entityId||null,metadata:(input.metadata||{}) as any}}); }
