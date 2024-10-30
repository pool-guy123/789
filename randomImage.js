// 存储用户选择的标签
let selectedGroup1 = null;
let selectedGroup2 = null;

// 监听标签1的按钮点击事件
document.querySelectorAll('.group1-btn').forEach(button => {
    button.addEventListener('click', function() {
        selectedGroup1 = this.getAttribute('data-label');
        // 清除其他按钮的选中状态
        document.querySelectorAll('.group1-btn').forEach(btn => btn.classList.remove('selected'));
        // 给当前点击的按钮添加选中状态
        this.classList.add('selected');
        console.log("标签1已选择: " + selectedGroup1);
    });
});

// 监听标签2的按钮点击事件
document.querySelectorAll('.group2-btn').forEach(button => {
    button.addEventListener('click', function() {
        selectedGroup2 = this.getAttribute('data-label');
        // 清除其他按钮的选中状态
        document.querySelectorAll('.group2-btn').forEach(btn => btn.classList.remove('selected'));
        // 给当前点击的按钮添加选中状态
        this.classList.add('selected');
        console.log("标签2已选择: " + selectedGroup2);
    });
});

// 随机抽取四张图片
document.getElementById('randomBtn').addEventListener('click', function() {
    if (!selectedGroup1 || !selectedGroup2) {
        alert('请先选择两个标签！');
        return;
    }

    // 获取所选的标签1和标签2下的图片列表
    const selectedImages = images[selectedGroup1][selectedGroup2];

    // 如果图片列表少于4张，提醒用户
    if (selectedImages.length < 4) {
        alert('该组合的图片少于4张，无法生成4张图片。');
        return;
    }

    // 随机选择4个不同的图片索引
    const randomIndexes = [];
    while (randomIndexes.length < 4) {
        const randomIndex = Math.floor(Math.random() * selectedImages.length);
        if (!randomIndexes.includes(randomIndex)) {
            randomIndexes.push(randomIndex);
        }
    }

    console.log("随机选择的图片索引: " + randomIndexes);

    // 显示4张随机图片
    for (let i = 0; i < 4; i++) {
        const imgElement = document.getElementById(`randomImage${i + 1}`);
        if (imgElement) {
            imgElement.src = selectedImages[randomIndexes[i]];
            console.log(`randomImage${i + 1} 的图片路径: ${selectedImages[randomIndexes[i]]}`);
        }
    }
});
