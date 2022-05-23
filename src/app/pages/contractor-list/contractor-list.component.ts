import { Component, OnInit,SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { TableColumns } from 'src/app/shared/table/tableColumns';
import { UserService } from 'src/app/_services/user.service';

// import * as XLSX from 'xlsx'; 
import { User } from '../../_services/user';

@Component({
  selector: 'app-contractor-list',
  templateUrl: './contractor-list.component.html',
  styleUrls: ['./contractor-list.component.css']
})
export class ContractorListComponent implements OnInit {

  
  loading!:Boolean
  user!: User[];  

  userTableColumns!: TableColumns[];

  

  mode={
    crudeMode: "create",
    data: null
  } 
  
  constructor(
    private userService: UserService,
    private router: Router,
    private matDailog:MatDialog,
   ) { }

  // ExportTOExcel() {  
  //   /* pass here the table id */
  //   let element = document.getElementById('excel-table');
  //   const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
  //   /* generate workbook and add the worksheet */
  //   const wb: XLSX.WorkBook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
  //   /* save to file */  
  //   XLSX.writeFile(wb, this.fileName);
  // }

  ngOnChanges(changes: SimpleChanges): void {
    this.getAll();
  }

  ngOnInit(): void {
    this.initializeColumns();
    this.getAll();
  }

  // sortData(sortParameters: Sort) {
  //   const keyName = sortParameters.active;
  //   if (sortParameters.direction === 'asc') {
  //     this.user = this.user.sort((a: User, b: User) => a[keyName]?.localeCompare(b[keyName]));
  //   } else if (sortParameters.direction === 'desc') {
  //     this.user = this.user.sort((a: User, b: User) => b[keyName]?.localeCompare(a[keyName]));
  //   } else {
  //     return this.getAll();
  //   }
  // }

  removeItem(id:number) {
    this.userService.delete(id) .subscribe(()=> {
      this.getAll();
    });
   
    console.log(id);
  }
  // editUser(id:number){
  //   this.userService.getById(id).subscribe(result =>{
  //       this.mode ={
  //         ...this.mode,
  //         crudeMode:"update",
  //         data:result
  //       }
  //   })
  // }

  initializeColumns(): void {
    this.userTableColumns = [
      {
        name: 'id',
        dataKey: 'user_id',
        position: 'right',
        isSortable: false
      },
      {
        name: 'User Name',
        dataKey: 'userName',
        position: 'right',
        isSortable: false
      },
      {
        name: 'First Name',
        dataKey: 'firstName',
        position: 'right',
        isSortable: false
      },
      {
        name: 'Last Name',
        dataKey: 'lastName',
        position: 'right',
        isSortable: false
      },
      {
        name: 'Email',
        dataKey: 'email',
        position: 'right',
        isSortable: false
      }
    ];
  }

  getAll(){
    this.loading = true;
    this.userService.getAll().subscribe((res:any)=>{
      this.user = res
      this.loading = false
    })
    this.loading=false
    
  }

  // createUser(){
  //   const dialogConfig = {
  //     width: '50%'
  //   }
  //   const dialogRef =this.matDailog.open(UserFormComponent,dialogConfig)
  //   dialogRef.afterClosed().subscribe(result =>{
  //     this.ngOnInit()
  //   })
  // }
  

}
