import { HostListener, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from "@angular/router";


@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.css']
})
export class MainWindowComponent implements OnInit {

      // Height="450" Width="800">
  private Height : number = 450;
  private Width : number = 800;

  private GRID1 : HTMLElement | null = null;
  private BTN1  : HTMLElement | null = null;
  private TEXTBLOCK1  : HTMLElement | null = null;
  private affiche  : HTMLElement | null = null;

  constructor(private titleService: Title,
              private router: Router)  {
                
    titleService.setTitle("MainWindow");
  }

  ngOnInit(): void {
    this.refreshGraphicalElements(true);

    console.log("window.innerWidth: " + window.innerWidth);
    console.log("window.innerHeight: " + window.innerHeight);

    console.log((324/this.Height) * window.innerHeight) ;
  }

  public afficher(sender : HTMLElement, target : HTMLElement) : void { 
    if (target.innerText == "") {
      target.innerText = "Coucou";
    }else {
      target.innerText = "";
    }
  
  //    this.router.navigate(['/window1'])
    this.refreshGraphicalElements(false);
  }

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

  @HostListener('window:resize', ['$event'])
  onResize(event : any){
    this.refreshGraphicalElements(false);
  }

  private refreshGraphicalElements(initialize : boolean) : void{
    this.GRID1 = document.getElementById("GRID1") ;
    this.BTN1 = document.getElementById("BTN1") ;
    this.TEXTBLOCK1 = document.getElementById("TEXTBLOCK1") ;
    this.affiche = document.getElementById("affiche") ;

    if (this.GRID1 && this.BTN1 && this.TEXTBLOCK1 && this.affiche) {
      if (initialize) 
        this.BTN1.innerText = "Button" ;
      
        // 1: Liste des CSS
      let style = "" ;//The pixel is WPF's default unit of measurement.
      style += "position: absolute;";
      style += "left: " + ((window.innerWidth / 2) - (this.BTN1.clientWidth / 2))  + "px;";
      style += "top: 0px;";
      // Center / Top
    
      // Margin="0,324,0,0"
      style += "margin-left : " + (0/this.Width) * window.innerWidth + "px; ";
      style += "margin-top : " + (324/this.Height) * window.innerHeight + "px; ";
      style += "margin-right : " + (0/this.Width) * window.innerWidth + "px; ";
      style += "margin-botton : " + (0/this.Height) * window.innerHeight + "px; ";

      this.BTN1.setAttribute("style", style) ;

      let className = "" ;
      this.BTN1.setAttribute("class", className) ;
      
      // -=-=-=-=-=-=-=-=-
      if (initialize) 
        this.TEXTBLOCK1.innerText = "Hello world" ;
      
        // 1: Liste des CSS
      style = ""; 
      style += "position: absolute;";
      style += "left: 0px;";
      style += "top: 0px;";
      // Left / Top

      // Margin="370,144,0,0"
      style += "margin-left : " + (370/this.Width) * window.innerWidth + "px; ";
      style += "margin-top : " + (144/this.Height) * window.innerHeight + "px; ";
      style += "margin-right : " + (0/this.Width) * window.innerWidth + "px; ";
      style += "margin-botton : " + (0/this.Height) * window.innerHeight + "px; ";

      this.TEXTBLOCK1.setAttribute("style", style) ;

      className = "" ;
      this.TEXTBLOCK1.setAttribute("class", className) ;
     

      // -=-=-=-=-=-=-=-=-
      if (initialize) 
        this.affiche.innerText = "" ;

      // 1: Liste des CSS
      style = "";
      style += "position: absolute;";
      style += "left: " + ((window.innerWidth / 2) - (this.affiche.clientWidth / 2))  + "px;";
      style += "top: " + ((window.innerHeight / 2) - (this.affiche.clientHeight / 2))  + "px;";
      // Center / Center
      this.affiche.setAttribute("style", style) ;

      className = "" ; 
      this.affiche.setAttribute("class", className) ;

      
      // -=-=-=-=-=-=-=-=-
    }
  }
}
