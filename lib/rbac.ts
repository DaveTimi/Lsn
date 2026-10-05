import { Role } from '@prisma/client';
export const permissions = {
  dashboard_view:['PLATFORM_ADMIN','SCHOOL_OWNER','SCHOOL_ADMIN','ACCOUNTANT','TEACHER','PARENT','STUDENT'],
  students_view:['PLATFORM_ADMIN','SCHOOL_OWNER','SCHOOL_ADMIN','TEACHER','PARENT','STUDENT'], students_manage:['PLATFORM_ADMIN','SCHOOL_OWNER','SCHOOL_ADMIN'],
  finance_view:['PLATFORM_ADMIN','SCHOOL_OWNER','SCHOOL_ADMIN','ACCOUNTANT','PARENT'], finance_manage:['PLATFORM_ADMIN','SCHOOL_OWNER','SCHOOL_ADMIN','ACCOUNTANT'],
  exams_view:['PLATFORM_ADMIN','SCHOOL_OWNER','SCHOOL_ADMIN','TEACHER','STUDENT','PARENT'], exams_manage:['PLATFORM_ADMIN','SCHOOL_OWNER','SCHOOL_ADMIN','TEACHER'],
  staff_manage:['PLATFORM_ADMIN','SCHOOL_OWNER','SCHOOL_ADMIN'], settings_manage:['PLATFORM_ADMIN','SCHOOL_OWNER','SCHOOL_ADMIN'], ai_use:['PLATFORM_ADMIN','SCHOOL_OWNER','SCHOOL_ADMIN','ACCOUNTANT','TEACHER']
} as const;
export function can(role:Role|string|undefined, permission:keyof typeof permissions){ return !!role && (permissions[permission] as readonly string[]).includes(String(role)); }
