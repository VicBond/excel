import { Excel } from '@/components/excel/Excel';
import { Formula } from '@/components/formula/Formula';
import { Header } from '@/components/header/Header';
import { Table } from '@/components/table/Table';
import { ToolBar } from '@/components/toolbar/Toolbar';
import './scss/index.scss';

const excel = new Excel('#app', {
  components: [Header, ToolBar, Formula, Table]
});

console.log('Excel', excel);