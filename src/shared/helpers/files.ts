export async function readJsonFile(file: File): Promise<unknown> {
  return new Promise<unknown>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      try {
        const json = JSON.parse(reader.result as string);
        resolve(json);
      } catch (error) {
        reject(new Error('Invalid JSON file'));
      }
    };

    reader.onerror = () => {
      reject(reader.error);
    };

    reader.readAsText(file);
  });
}

export const getFormDataFromObject = (data: Record<string, any>): FormData => {
  const formData = new FormData();

  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });

  return formData;
};