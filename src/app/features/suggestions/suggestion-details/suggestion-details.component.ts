import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-suggestion-details',
  templateUrl: './suggestion-details.component.html',
  styleUrls: ['./suggestion-details.component.css']
})
export class SuggestionDetailsComponent implements OnInit {

  suggestionId!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.suggestionId = this.route.snapshot.paramMap.get('id')!;
  }

}
