<?php

namespace App\Repository;

use App\Entity\Book;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

final class BookRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Book::class);
    }

    public function searchBookByTitleOrAuthorName(string $text)
    {
        $qb = $this->createQueryBuilder('b')
            ->where('b.title LIKE :title')
            ->setParameter('title', '%'.$text.'%')
            ->orWhere('b.author LIKE :author')
            ->setParameter('author', '%'.$text.'%')
            ->getQuery();

        return $qb->execute();
    }
}
