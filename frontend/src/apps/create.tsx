import styled from '@emotion/styled';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import { Button } from '../components/button';
import { Input } from '../components/input';
import { TextArea } from '../components/textArea';
import { Layout } from '../layouts/CommonLayout';
import { Colors } from '../styles';

const ImageUploadSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
    <g clip-path="url(#clip0_9_2845)">
      <rect width="44" height="44" rx="5.5" fill="#BBBBBB" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M31.8156 21.275C29.6136 18.4878 25.3864 18.4878 23.1844 21.275L16.454 29.7939L15.1913 28.3078C12.9949 25.7229 9.00506 25.7229 6.80868 28.3078L-4.52105 41.6419C-7.55644 45.2142 -5.01754 50.7032 -0.329752 50.7032H22.3297C25.6002 50.7032 27.8247 48.0317 27.8402 45.2032H39.3656C43.9618 45.2032 46.5305 39.9 43.6812 36.2936L31.8156 21.275Z"
        fill="#D7D7D7"
      />
      <circle cx="12.0312" cy="12.7188" r="5.15625" fill="#D7D7D7" />
    </g>
    <defs>
      <clipPath id="clip0_9_2845">
        <rect width="44" height="44" rx="5.5" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const useImageUploadButton = () => {
  const [image, setImage] = useState<{ preview: string; raw: any }>();
  const handleChange = (e: any) => {
    if (e.target.files.length) {
      const file = e.target.files[0];
      setImage({
        preview: URL.createObjectURL(file),
        raw: file,
      });
      e.target.value = '';
    }
  };

  const ImageUploadButton = useCallback(
    () => (
      <ImageUploadContainer type="button">
        <input type="file" id="upload" onChange={handleChange} hidden />
        <ImageUploadLabel htmlFor="upload">
          {!image && (
            <ImageUploadWrapper>
              <ImageUploadSvg />
              <ImageUploadTitle>이미지 업로드</ImageUploadTitle>
            </ImageUploadWrapper>
          )}
          {image && <UploadImg src={image?.preview} alt="img" />}
        </ImageUploadLabel>
      </ImageUploadContainer>
    ),
    [image]
  );

  return {
    ImageUploadButton,
    image,
  };
};

export const CreatePage = () => {
  const { ImageUploadButton, image } = useImageUploadButton();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: '',
      link: '',
      description: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().max(30, '최대 30글자까지 가능합니다.').required('Required'),
      link: Yup.string().required('Required'),
      description: Yup.string().max(100, '최대 100글자까지 가능합니다.').required('Required'),
    }),
    onSubmit: async (values) => {
      const formData = new FormData();

      formData.append('file', image?.raw);
      Object.entries(values).map(([key, value]) => formData.append(key, value));
      const id = sessionStorage.getItem('id');
      const { status } = await axios.post(`http://10.10.4.181:4000/wish-list/${id}`, formData);
      if (status === 201) navigate(-1);
    },
  });

  const isButtonDisable = () => Object.keys(formik.errors).length > 0;

  return (
    <Layout hasBackButton hasBackground>
      <Container onSubmit={formik.handleSubmit}>
        <Wrapper>
          <Title>삼품 이미지를 선택해주세요.</Title>
          <ImageUploadButton />
        </Wrapper>
        <Wrapper>
          <Title>상품명을 입력해주세요.</Title>
          <Input
            id="title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            label=""
          />
        </Wrapper>
        <Wrapper>
          <Title>상품 링크를 입력해주세요.</Title>
          <Input
            id="link"
            name="link"
            value={formik.values.link}
            onChange={formik.handleChange}
            label=""
          />
        </Wrapper>
        <Wrapper>
          <Title>상품 설명을 입력해주세요.</Title>
          <TextArea
            id="description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            label=""
          />
        </Wrapper>
        <ButtonContainer>
          <Button text="상품 등록" disabled={isButtonDisable()} />
        </ButtonContainer>
      </Container>
    </Layout>
  );
};

const Container = styled.form`
  width: 100%;
  padding: 82px 20px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: ${Colors.titleActive};
`;

const ImageUploadContainer = styled.button`
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-self: self-start;
  border: 1px solid #d7d7d7;
  border-radius: 8px;
  width: 140px;
  height: 140px;
  overflow: auto;
`;

const ImageUploadLabel = styled.label`
  width: 100%;
  height: 100%;
`;

const ImageUploadWrapper = styled.div`
  margin: 34px;
`;

const UploadImg = styled.img`
  width: 100%;
  height: 100%;
`;

const ImageUploadTitle = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: ${Colors.body};
`;

const ButtonContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0px;
  left: 0px;
  padding: 20px;
`;
