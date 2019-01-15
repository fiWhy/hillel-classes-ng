import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
  selector: 'c-editable-input',
  templateUrl: './editable-input.component.html',
  styleUrls: ['./editable-input.component.scss']
})
export class EditableInputComponent implements OnInit {
  Editor = ClassicEditor;
  content: string;
  editContent: boolean;
  inputData = '';

  @Input() editable = true;
  @Input() data: string;
  @Input() editor = true;
  @Input() withButton = true;


  @Output() save = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  enableContentEditor(e) {
    this.content = this.data;
    this.editContent = this.editable;
  }

  disableContentEditor(e) {
    this.editContent = false;
    if (this.content !== this.data) {
      this.save.emit(this.content);
    }
  }

  handleContentChanged({ editor }: ChangeEvent) {
    this.content = editor.getData();
  }
}
