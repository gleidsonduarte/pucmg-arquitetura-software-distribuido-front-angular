import { HttpHeaders } from '@angular/common/http';

class ApiMicConfigs {
    public basePath: string;
    public headers: HttpHeaders;

    constructor() {
        this.basePath = 'http://localhost:8000/mic';
        this.headers = new HttpHeaders()
            .set('apikey', '0DWzyaocEoYexyFYQuzRfOBmp7FUbmaZ')
            .set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    }
}

export default new ApiMicConfigs();