import { Component, OnInit } from '@angular/core';
import { Member } from '../../_model/member';
import { MembersService } from '../../_services/members.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css'
})
export class MemberListComponent implements OnInit {
  members$: Observable<Member[]> | undefined

  constructor(private membersService: MembersService) {

  }
  ngOnInit(): void {
  this.members$ = this.membersService.getMembers()
  }
  
}