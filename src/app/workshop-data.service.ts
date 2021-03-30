import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { Workshop } from './workshop-list/workshop';
import { Reply } from './therapy-list/therapy';
import { map, tap } from 'rxjs/operators';
import { Archive } from './change-img/archive';
import { environment } from 'src/environments/environment';
const URL = 'https://ikaruna.000webhostapp.com/api/workshop';
/*import { express } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const options = {
  target: 'http://ikaruna.000webhostapp', // target host
  changeOrigin: true, // needed for virtual hosted sites
  ws: true, // proxy websockets
  pathRewrite: {
    '^https://ikaruna.vercel.app/api/': 'https://ikaruna.webhostapp/api/', // rewrite path
    '^/api/remove/path': '/ikaruna.vercel.app', // remove base path
  },
  router: {
    // when request.headers.host == 'dev.localhost:3000',
    // override target 'http://www.example.org' to 'http://localhost:8000'
    'https://ikaruna.vercel.app': 'https://ikaruna.000.webhostapp',
  },
};

const apiProxy = createProxyMiddleware(options);
const app = express();
app.use('/api', apiProxy);*/

@Injectable({
  providedIn: 'root'
})

export class WorkshopDataService {

  baseUrl: string = environment.backend.baseURL;

  private _workshops: Workshop[] = [];
  workshops: BehaviorSubject<Workshop[]> = new BehaviorSubject(this._workshops);

  private _changeImg: Workshop = null;
  changeImg: BehaviorSubject<Workshop> = new BehaviorSubject(this._changeImg);

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Workshop[]> {
    return this.http.get<Workshop[]>(URL)
    .pipe(
      tap((workshops: Workshop[]) => {
        this._workshops = [];
         workshops.forEach(wsp => {
           this._workshops.push({...wsp});
         });
         this.workshops.next(this._workshops);
       })
    );
  }

  public manageWorkshop(workshop: Workshop): any {
    return this.http.post(URL, JSON.parse(JSON.stringify(workshop)));
  }

  public setChangeImg(ws: Workshop) {
    this._changeImg = ws;
    this.changeImg.next(this._changeImg);
  }

  public addImg(img: FormData, id: number): any {
    return this.http.put(`/api/workshopp/${id}`,
    JSON.parse(JSON.stringify(img)));
  }
}
