import { Component } from '@angular/core';
import { ViacepService } from '../../services/viacep.service';
import Address from '../../models/Address';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cep: string = '09320000';
  address: Address | undefined;

  constructor(private viacepService: ViacepService) { }

  searchAddress() {
    this.viacepService.getAddress(this.cep)
      .subscribe((response: any) => {
        this.address = response;
      });
  }
}
