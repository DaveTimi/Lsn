import { db } from './db';
import { requireUser } from './auth';
export async function tenant(){ const s:any=await requireUser(); if(!s.schoolId && s.role!=='PLATFORM_ADMIN') throw new Error('SCHOOL_REQUIRED'); return {session:s, schoolId:s.schoolId as string|undefined}; }
export async function schoolOrThrow(id:string){ const s=await db.school.findUnique({where:{id}}); if(!s) throw new Error('SCHOOL_NOT_FOUND'); return s; }
