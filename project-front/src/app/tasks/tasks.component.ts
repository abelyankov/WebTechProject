import { Component, OnInit } from '@angular/core';
import {ITasks} from '../imodel';
import {ProviderService} from '../provider.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  public tasks: ITasks[] = [];
  public isLogged = false;
  public showAllRow = false;
  constructor(private provider: ProviderService,  private router: Router ) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    const user_type = localStorage.getItem('user_type');
    if (token) {
      this.isLogged = true;
      if (user_type === 'experts') {
        this.showAllRow = true;
      }
    }
    if (this.isLogged) {
      this.getTasks();
    }
  }

  getTasks() {
    this.provider.getTasks().then(res => {
      this.tasks = res;
    });
  }

}
