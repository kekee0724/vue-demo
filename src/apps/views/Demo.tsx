import { defineComponent, reactive } from "vue";

import { Toast } from "antd-mobile-vue-next";
const data = [
  {
    url: "https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg",
    id: "2121",
  },
  {
    url: "https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg",
    id: "2122",
  },
];

export const Demo = defineComponent({
  name: "ImagePickerExample",
  setup(props, { emit, slots }) {
    const state = reactive({
      files: data,
      multiple: false,
    });

    const onChange = (files, type, index) => {
      state.files = files;
    };
    const onSegChange = (index) => {
      state.multiple = index === 1;
    };

    return {
      state,
      onChange,
      onSegChange,
    };
  },
  render() {
    const { files } = this.state;
    return (
      <m-wing-blank>
        <m-segmented-control
          values={["切换到单选", "切换到多选"]}
          value={this.state.multiple ? 1 : 0}
          onChange={this.onSegChange}
        />
        <m-image-picker
          value={files}
          onChange={this.onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 7}
          onFail={(msg) => {
            Toast.info(msg);
          }}
          multiple={this.state.multiple}
        />
      </m-wing-blank>
    );
  },
});
