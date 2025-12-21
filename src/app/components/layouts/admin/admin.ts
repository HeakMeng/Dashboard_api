import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { NavSide } from '../nav-side/nav-side';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-admin',
  imports: [RouterOutlet, Header, NavSide, Footer],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {}
