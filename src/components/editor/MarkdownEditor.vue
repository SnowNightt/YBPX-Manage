<template>
  <div style="border: 1px solid #ccc">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      style="height: 500px; overflow-y: hidden"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
      @onChange="changeValue"
    />
  </div>
</template>
<script lang="ts" setup>
import '@wangeditor/editor/dist/css/style.css'; // 引入 css
import { onBeforeUnmount, ref, shallowRef, watch } from 'vue';
import { Editor, Toolbar } from '@wangeditor/editor-for-vue';
import { IDomEditor } from '@wangeditor/editor';
import { ApiEnum } from '@/enum/apiEnum';
interface Iprops {
  modelValue?: string;
  placeholder?: string;
}
const props = withDefaults(defineProps<Iprops>(), {
  modelValue: '',
  placeholder: '请输入内容..'
});
const emit = defineEmits<{ (e: 'update:modelValue', data: string): void }>();
// 编译器值
const valueHtml = ref(props.modelValue);
// 监听父组件数据
watch(
  () => props.modelValue,
  (newVal) => {
    valueHtml.value = newVal;
  }
);
const mode = ref('default');
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef<IDomEditor>();

const toolbarConfig = {};
const editorConfig = {
  placeholder: props.placeholder,
  MENU_CONF: {
    // 上传图片的配置
    uploadImage: {
      // 服务端地址（发送请求的接口）
      server: ApiEnum.UPLOAD_IMAGE_URL,
      // form-data fieldName ，默认值 'wangeditor-uploaded-image'
      fieldName: 'img',
      // 单个文件的最大体积限制，默认为 2M
      maxFileSize: 4 * 1024 * 1024, // 1M
      // 最多可上传几个文件，默认为 100
      maxNumberOfFiles: 10,
      // 选择文件时的类型限制，默认为 ['image/*'] 。如不想限制，则设置为 []
      allowedFileTypes: ['image/*'],
      // 跨域是否传递 cookie ，默认为 false
      withCredentials: true,
      // 超时时间，默认为 10 秒
      timeout: 5 * 1000, // 5 秒
      // 自定义插入
      customInsert(res: any, insertFn: any) {
        // res 即服务端的返回结果
        const {
          data: { url }
        } = res;
        // 从 res 中找到 url alt href ，然后插入图片
        insertFn(url);
      }
    }
  }
};
// 编辑器内容、选区变化时的回调函数。
const changeValue = () => {
  // 父子组件数据同步
  emit('update:modelValue', valueHtml.value);
};
// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});

const handleCreated = (editor: IDomEditor) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};
</script>
