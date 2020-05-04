<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class BookController extends AbstractController
{
    /**
     *
     * @Route("/bookstore/book/{id}", name="bookstore_book_page")
     * @return Response
     */
    public function book(): Response
    {
        return $this->render('index.html.twig');
    }
}
