
export function formatDescription(description) {
    if (!description) return '';
  
    let result = description;
  
    // Xuống dòng sau icon
    result = result.replace(/(🍒|🍫|🍵|🧀|🌾|🌰|🍇|🥚)/g, '\n- $1');
  
    // Xuống dòng giữa các câu
    result = result.replace(/([!:?])\s*(?=\S)/g, '$1\n\n');
  
    // Tô đậm các mục lớn
    result = result.replace(
      /(RẤT PHÙ HỢP|CÁCH SỬ DỤNG|CÁCH BẢO QUẢN|HẠN SỬ DỤNG|CAM KẾT[^:\n]*)/gi,
      '\n\n### $1'
    );
  
    // Đảm bảo dấu đầu dòng "- " nằm ở dòng mới
    result = result.replace(/(?<!\n)- /g, '\n ');
  
    return result.trim();
  }
  