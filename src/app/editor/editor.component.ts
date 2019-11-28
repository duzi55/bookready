import { Component, OnInit, EventEmitter, Output, ElementRef, Renderer } from '@angular/core';
import * as wangEditor from '../../../node_modules/wangeditor/release/wangEditor.js';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  private editor: any;
  @Output() postData = new EventEmitter();
  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
    const editor = this.el.nativeElement.querySelector('#editor');
    this.editor = new wangEditor(editor);
    this.editor.customConfig.uploadImgShowBase64 = true;
    this.editor.customConfig.menus = [
      'head',  // 标题
      'bold',  // 粗体
      'fontSize',  // 字号
      'fontName',  // 字体
      // 'italic',  // 斜体
      'underline',  // 下划线
      // 'strikeThrough',  // 删除线
      'foreColor',  // 文字颜色
      'backColor',  // 背景颜色
      // 'link',  // 插入链接
      // 'list',  // 列表
      'justify',  // 对齐方式
      // 'quote',  // 引用
      // 'emoticon',  // 表情
      // 'image',  // 插入图片
      // 'table',  // 表格
      // 'video',  // 插入视频
      'code',  // 插入代码
      'undo',  // 撤销
      'redo'  // 重复
  ];
    this.editor.create();
  }
}
