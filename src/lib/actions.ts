import { CodeService } from '@/lib/services/code.service';

const { executeCode, exportCode, importCode } = new CodeService();

export { executeCode, importCode, exportCode };
