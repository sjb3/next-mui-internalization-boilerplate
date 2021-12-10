import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import data from '../utils/data';
import Layout from '../components/Layout';
// import styles from '../styles/Home.module.css';
// import { useRouter } from 'next/dist/client/router';
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  // const router = useRouter();
  const { t } = useTranslation();

  return (
    <Layout>
      <div>
        <h1>{t('common:product')}</h1>
        <Grid container spacing={3}>
          {data.products.map((product) => (
            <Grid item md={4} key={product.name}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={product.image}
                    title={product.name}
                  ></CardMedia>
                  <CardContent>
                    <Typography>{product.name}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Typography>${product.price}</Typography>
                  <Button size="small" color="primary">
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}
