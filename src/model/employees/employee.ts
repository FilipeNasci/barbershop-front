export interface EmployeeDTO {
    
    birthDate: string
    cpf: string
    created_at?: string
    deleted_at?: string
    email: string
    firstName: string
    is_active?: boolean
    lastName: string
    phone: string
    units?: string[]
    updated_at?: string
    user_id?: number
    user_type: string
    password?: string
    passwordConfirmation?: string
    company_id?: string
}