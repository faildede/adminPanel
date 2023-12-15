import { Box, Button, TextField  } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import {useMediaQuery} from "@mui/material";
import Header from "../../components/Header";

const initialValues = {
    title: "",
    manufacturer: "",
    img: "",
    price: "",
    description: "",
    category: "", 
};
const deviceSchema = yup.object().shape({
    title: yup.string().required("Обязательна для ввода"),
    manufacturer: yup.string().required("Обязательна для ввода"),
    img: yup.string().required("Обязательна для ввода"),
    price: yup.string().required("Обязательна для ввода"),
    category: yup.string().required("Обязательна для ввода"),
})

const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    
    const handleFormSubmit = (values) => {
        console.log(values);
    }

    return(
        <Box m="20px">
            <Header title="Создание нового товара"  />
            <Formik 
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={deviceSchema}
            >
                {({ values, errors, touched, handleBlur, handleChange, handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <Box 
                        display="grid" 
                        gap="30px" 
                        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                        sx={{
                            "& > div" : {gridColumn: isNonMobile ? undefined : "span 4"}
                        }}
                       >
                        <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Название товара"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.title}
                        name="title"
                        error={!!touched.title && !!errors.title }
                        helperText={touched.title && errors.title}
                        sx={{ gridColumn: "span 2" }}
                        />
                          <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Название производителя"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.manufacturer}
                        name="manufacturer"
                        error={!!touched.manufacturer && !!errors.manufacturer }
                        helperText={touched.manufacturer && errors.manufacturer}
                        sx={{ gridColumn: "span 2" }}
                        />
                          <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Изображение"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.img}
                        name="img"
                        error={!!touched.img && !!errors.img }
                        helperText={touched.img && errors.img}
                        sx={{ gridColumn: "span 2" }}
                        />
                          <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Цена"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.price}
                        name="price"
                        error={!!touched.price && !!errors.price }
                        helperText={touched.price && errors.price}
                        sx={{ gridColumn: "span 1" }}
                        />
                          <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Категория"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.category}
                        name="category"
                        error={!!touched.category && !!errors.category }
                        helperText={touched.category && errors.category}
                        sx={{ gridColumn: "span 1" }}
                        />
                                <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Описание товара"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.description}
                        name="description"
                        error={!!touched.description && !!errors.description }
                        helperText={touched.description && errors.description}
                        sx={{ gridColumn: "span 3" }}
                        />

                        </Box>
                        <Box display="flex" justifyContent="start" mt="30px">
                            <Button type="submit" color="secondary" variant="contained">
                                Добавить товар
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    )
}

export default Form;